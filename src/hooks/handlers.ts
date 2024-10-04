import { useRouter } from 'next/navigation';
export const useNavigation = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return { handleNavigate };
};
