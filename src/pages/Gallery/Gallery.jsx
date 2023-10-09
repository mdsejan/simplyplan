const Gallery = () => {
  return (
    <div>
      <div className="min-h-[20vh] bg-gray-200 flex flex-col justify-center items-center text-center py-8 px-5">
        <h1 className="text-5xl font-semibold">Gallery</h1>
        <p className="mt-3 text-gray-500">Our Recent Works</p>
      </div>
      <div className="max-w-screen-2xl mx-auto py-20 px-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/fb/95/f7/fb95f777b30bf7e21647a6678808332e.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/60/6f/2c/606f2c99b2914f7b9dfe0c36d334f317.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/21/23/e8/2123e881ad3d055838d711f33764f96a.jpg"
              alt=""
            />
          </div>
        </div>

        {/* -----2----- */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/b3/f2/6d/b3f26dba3b0a7ee462b7891c21dae20b.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/b1/a1/d7/b1a1d7b98aa42bf1075a21c747ff636a.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/10/ce/9a/10ce9a2c98092c415db7a7ae907f6ecf.jpg"
              alt=""
            />
          </div>
        </div>

        {/* -----3----- */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://yorkmillsgallery.com/wp-content/uploads/2020/03/23155195_763943597123771_1896105128494109996_o.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/13/70/6e/13706e0fa859a88630d4e4eed8c851a6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/8a/8e/35/8a8e3554ff0e36ef08c84a34ba7bbf4b.jpg"
              alt=""
            />
          </div>
        </div>

        {/* -----4----- */}
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/b4/1a/34/b41a3420cbe6104e74d4b0769ed683d6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/05/1d/7a/051d7a8089a030ede45318775e70a8fa.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://i.pinimg.com/564x/4b/2d/b1/4b2db191ba4607b3e17853ec2c75c4cf.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
