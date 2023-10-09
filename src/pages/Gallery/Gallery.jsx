const Gallery = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-sm text-center mb-8 mt-16">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
          Gallery
        </h2>
        <p className="font-light text-gray-500 sm:text-xl">
          Moments to Remember: Event Snapshot
        </p>
      </div>
      <div className="max-w-screen-2xl mx-auto py-20 px-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/nwwfSSg/eventimg1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/rxnx7zt/eventimg2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/zVsNGh2/eventimg3.jpg"
              alt=""
            />
          </div>
        </div>

        {/* -----2----- */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/kyzVgtL/eventimg4.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/NFNpdhf/eventimg5.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/0fRCczy/eventimg6.jpg"
              alt=""
            />
          </div>
        </div>

        {/* -----3----- */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/k5pNtsm/eventimg7.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/sVcRhKw/eventimg8.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/3d5v0pM/eventimg9.jpg"
              alt=""
            />
          </div>
        </div>

        {/* -----4----- */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/qNxyhTz/eventimg10.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/w6MPzTM/eventimg11.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.ibb.co/9TCvjCw/eventimg12.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
