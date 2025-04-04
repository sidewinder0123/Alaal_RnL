import Navbar from "../../components/Navbar";

interface MainLayoutProps {
  content: React.ReactNode;
}

const MainLayout = ({ content }: MainLayoutProps) => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
<<<<<<< HEAD
=======

>>>>>>> 424a71b (adjust)
        <div>{content}</div>
      </div>
    </>
  );
};

export default MainLayout;
