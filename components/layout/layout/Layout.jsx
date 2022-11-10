import Others from "../Section/Others/Others";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  const layout = `grid grid-cols-[repeat(12,_1fr)] gap-y-20`;

  return <div className={`${layout}`}>{children}</div>;
};

export default Layout;
