import { HashRouter, useRoutes, Link, Route, Routes } from "react-router-dom";
import { Breadcrumb, PageHeader, Row, Space } from "antd";
import "./styles.css";

const A = () => {
  return <div>a page</div>;
};

const B = () => {
  return <div>b page</div>;
};

const C = () => {
  return <div>c page</div>;
};

const RootPage = () => {
  return <div>root page</div>;
};

const routes = [
  {
    breadcrumbName: "home",
    path: "/",
    children: [
      {
        path: "/",

        element: <RootPage />,
        breadcrumbName: "Home",
      },
      {
        path: "/a",
        element: <A />,
        breadcrumbName: "a page",
      },
      {
        path: "/b",
        element: <B />,
        breadcrumbName: "b page",
      },
    ],
  },
];

const flatRoutes = [
  ...routes,
  {
    path: "/a",
    element: <A />,
    breadcrumbName: "a page",
  },
  {
    path: "/b",
    element: <B />,
    breadcrumbName: "b page",
  },
];

const RouteDom = () => {
  return (
    <Routes>
      <Route path="/" element={<RootPage />}></Route>
      <Route path="a">
        <Route path="/" element={<A />}></Route>
        <Route path="c" element={<C />}></Route>
      </Route>
      <Route path="b" element={<B />} />
    </Routes>
  );
};

export default function App() {
  const RouteCom = () => useRoutes(routes);

  return (
    <div className="App">
      <HashRouter>
        <Row>
          <Space>
            <Link to="/">Home </Link>
            <Link to="/a">a page </Link>
            <Link to="/a/c">c page </Link>
            <Link to="/b">b page </Link>
          </Space>
        </Row>

        <Row>
          <Space>
            <div>Stacked Structure: </div>
            <PageHeader breadcrumb={<Breadcrumb routes={routes} />} />
          </Space>
        </Row>

        <Row>
          <Space>
            <div>Flat Structure: </div>
            <PageHeader breadcrumb={<Breadcrumb routes={flatRoutes} />} />
          </Space>
        </Row>

        <Row>
          <Space>
            <div>Object Route: </div>
            <RouteCom />
          </Space>
        </Row>

        <Row>
          <Space>
            <div>Dom Route: </div>
            <RouteDom />
          </Space>
        </Row>
      </HashRouter>
    </div>
  );
}
