import { MainLayout } from "../../Layouts/MainLayout";
import { Card } from "../../Components/Card";

export const Home = () => {
  return (
    <MainLayout>
      <Card
        ProductImg={
          "https://img.freepik.com/free-vector/flat-summer-night-illustration-with-beach-view_23-2149427599.jpg"
        }
        ProductTitle={"Showy"}
        ProductPrice={150}
      />

      <Card
        ProductImg={
          "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/08/Retrofuturism-in-design.jpg?auto=format&q=60&w=450&h=270&fit=crop&crop=faces"
        }
        ProductTitle={"Showy"}
        ProductPrice={150}
      />
    </MainLayout>
  );
};
