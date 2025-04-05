import { createContext, useContext, ReactNode } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/api/userServices';
import Login from '@/pages/(registration)/login/Login';

// กำหนดประเภทข้อมูล user
interface User {
  id: number;
  username: string;
  email: string;
}

// กำหนดประเภทของ Context value
interface UserContextType {
  user: User | undefined;
  loading: boolean;
  error: any;
}

const UserContext = createContext<UserContextType | null>(null);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const { data: user, error, isLoading } = useSWR('/api/auth/me', fetcher);

  if (isLoading) return <div>Loading...</div>; //Loading
  if (error) return <Login/> //if dont have token or something wrong!

  return (
    <UserContext.Provider value={{ user, loading: isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
