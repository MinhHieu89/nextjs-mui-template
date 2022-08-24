type GetLayout = (page: React.ReactNode) => React.ReactNode;

type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};
