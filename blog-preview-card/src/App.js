import img1 from "./assets/images/illustration-article.svg";
import img2 from "./assets/images/image-avatar.webp";
function App() {
  return (
    <div className="App ">
      <div className="p-6 m-6 bg-white-1 rounded-2xl relative border border-black-1 shadow-custom max-w-72">
        <img
          src={img1}
          alt="image"
          aria-hidden="true"
          className="mb-6 rounded-lg"
        />
        <button className="my-3 px-2 py-0.5 bg-yellow-1 rounded-sm font-bold">
          Learning
        </button>
        <p>Publish 21 Dec 2023</p>
        <h1 className="font-extrabold text-xl my-3 cursor-pointer transition-all hover:text-yellow-1">
          HTML & CSS foundations
        </h1>
        <p className="text-sm text-grey-1 mb-3">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center">
          <img
            src={img2}
            alt="profile picture"
            aria-hidden="true"
            className="w-8 h-8 mr-3"
          />
          <h3 className="font-bold">Greg Hooper</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
