import { create } from 'zustand';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

function getMockUserFromStorage() {
  const raw = localStorage.getItem('mock_user');
  return raw ? JSON.parse(raw) : null;
}

function setMockUserToStorage(user) {
  localStorage.setItem('mock_user', JSON.stringify(user));
}

function clearMockUserFromStorage() {
  localStorage.removeItem('mock_user');
}

export const useAuthStore = create((set, get) => ({
  session: null,
  currentUser: null,
  isLoading: true,
  error: null,

  initialize: async () => {
    set({ isLoading: true, error: null });
    try {
      if (isSupabaseConfigured) {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        let currentUser = null;
        if (session?.user) {
          // Attempt to load profile from 'users' table
          const { data: profile } = await supabase
            .from('users')
            .select('*')
            .eq('id', session.user.id)
            .maybeSingle();
          currentUser = {
            id: session.user.id,
            email: session.user.email,
            name: profile?.name ?? '',
            department: profile?.department ?? '',
            role: profile?.role ?? 'Student',
          };
        }
        set({ session, currentUser, isLoading: false });
      } else {
        const mock = getMockUserFromStorage();
        set({ session: mock ? { user: { id: mock.id, email: mock.email } } : null, currentUser: mock, isLoading: false });
      }
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
    }
  },

  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        const session = data.session;
        const user = data.user;
        const { data: profile } = await supabase
          .from('users')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();
        const currentUser = {
          id: user.id,
          email: user.email,
          name: profile?.name ?? '',
          department: profile?.department ?? '',
          role: profile?.role ?? 'Student',
        };
        set({ session, currentUser, isLoading: false });
        return { ok: true };
      } else {
        // Mock mode: accept any credentials
        const mockUser = {
          id: 'mock-' + Math.random().toString(36).slice(2),
          email,
          name: 'Mock User',
          department: 'Computer Science',
          role: 'Student',
        };
        setMockUserToStorage(mockUser);
        set({ session: { user: { id: mockUser.id, email: mockUser.email } }, currentUser: mockUser, isLoading: false });
        return { ok: true };
      }
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
      return { ok: false, error: err.message };
    }
  },

  signup: async ({ name, department, role, email, password }) => {
    set({ isLoading: true, error: null });
    try {
      if (isSupabaseConfigured) {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        const user = data.user;
        if (!user) throw new Error('Signup failed');
        // Upsert profile
        const { error: upsertError } = await supabase
          .from('users')
          .upsert({ id: user.id, email, name, department, role }, { onConflict: 'id' });
        if (upsertError) throw upsertError;
        const session = data.session;
        const currentUser = { id: user.id, email, name, department, role };
        set({ session, currentUser, isLoading: false });
        return { ok: true };
      } else {
        const mockUser = { id: 'mock-' + Math.random().toString(36).slice(2), email, name, department, role };
        setMockUserToStorage(mockUser);
        set({ session: { user: { id: mockUser.id, email: mockUser.email } }, currentUser: mockUser, isLoading: false });
        return { ok: true };
      }
    } catch (err) {
      console.error(err);
      set({ error: err.message, isLoading: false });
      return { ok: false, error: err.message };
    }
  },

  logout: async () => {
    try {
      if (isSupabaseConfigured) {
        await supabase.auth.signOut();
      } else {
        clearMockUserFromStorage();
      }
    } finally {
      set({ session: null, currentUser: null });
    }
  },
}));
