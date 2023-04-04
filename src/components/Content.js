import AppRoute from "../routes/AppRouter";

function Content() {
  return (
    <main 
      className="px-5 py-5 sm:px-8 md:px-10 md:py-8 lg:px-14 lg:py-10 2xl:px-20 overflow-auto">
      <AppRoute />
    </main>
  );
}

export default Content;
