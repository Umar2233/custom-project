import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./categories.scss";
import { SetTitleCate } from "../../Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const { title, setImage } = useContext(SetTitleCate);

  const [sliderNumber, setSliderNumber] = useState(0);

  const [currentId, setCurrentId] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  const handleMove = (id, i) => {
    let newSliderNumber =
      sliderNumber === lists[i].img.length - 1 ? 0 : sliderNumber + 1;
    setSliderNumber(newSliderNumber);

    console.log(i);

    setCurrentId(id);
  };

  const [lists, setLists] = useState([
    {
      id: 0,
      title: "Avaari Hotel",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti beatae nam, velit amet repellendus repudiandae mollitia qui eum ipsam maiores dolore quaerat fugiat, ad, necessitatibus voluptas! Nesciunt iste rem error totam iusto aliquid illo eos eveniet corrupti, dolorem et veritatis atque necessitatibus. Quas, eligendi laudantium! Molestiae excepturi provident numquam odit similique unde esse magni, nemo veritatis voluptates officiis doloremque recusandae tempore soluta, suscipit cupiditate, dolorem iste. Error sapiente, praesentium itaque aspernatur sit qui iste delectus, esse doloremque nam accusamus, culpa commodi ipsum! Quam corrupti magnam, aliquid dolores pariatur vel ipsa nobis earum? Accusantium optio laboriosam facere cumque, porro exercitationem!",
      img: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ],
    },
    {
      id: 1,
      title: "Pearl Continental Hotel",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti beatae nam, velit amet repellendus repudiandae mollitia qui eum ipsam maiores dolore quaerat fugiat, ad, necessitatibus voluptas! Nesciunt iste rem error totam iusto aliquid illo eos eveniet corrupti, dolorem et veritatis atque necessitatibus. Quas, eligendi laudantium! Molestiae excepturi provident numquam odit similique unde esse magni, nemo veritatis voluptates officiis doloremque recusandae tempore soluta, suscipit cupiditate, dolorem iste. Error sapiente, praesentium itaque aspernatur sit qui iste delectus, esse doloremque nam accusamus, culpa commodi ipsum! Quam corrupti magnam, aliquid dolores pariatur vel ipsa nobis earum? Accusantium optio laboriosam facere cumque, porro exercitationem!",
      img: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ],
    },
    {
      id: 2,
      title: "City Inn Hotel",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti beatae nam, velit amet repellendus repudiandae mollitia qui eum ipsam maiores dolore quaerat fugiat, ad, necessitatibus voluptas! Nesciunt iste rem error totam iusto aliquid illo eos eveniet corrupti, dolorem et veritatis atque necessitatibus. Quas, eligendi laudantium! Molestiae excepturi provident numquam odit similique unde esse magni, nemo veritatis voluptates officiis doloremque recusandae tempore soluta, suscipit cupiditate, dolorem iste. Error sapiente, praesentium itaque aspernatur sit qui iste delectus, esse doloremque nam accusamus, culpa commodi ipsum! Quam corrupti magnam, aliquid dolores pariatur vel ipsa nobis earum? Accusantium optio laboriosam facere cumque, porro exercitationem!",
      img: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ],
    },
    {
      id: 3,
      title: "Trump Hotel",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti beatae nam, velit amet repellendus repudiandae mollitia qui eum ipsam maiores dolore quaerat fugiat, ad, necessitatibus voluptas! Nesciunt iste rem error totam iusto aliquid illo eos eveniet corrupti, dolorem et veritatis atque necessitatibus. Quas, eligendi laudantium! Molestiae excepturi provident numquam odit similique unde esse magni, nemo veritatis voluptates officiis doloremque recusandae tempore soluta, suscipit cupiditate, dolorem iste. Error sapiente, praesentium itaque aspernatur sit qui iste delectus, esse doloremque nam accusamus, culpa commodi ipsum! Quam corrupti magnam, aliquid dolores pariatur vel ipsa nobis earum? Accusantium optio laboriosam facere cumque, porro exercitationem!",
      img: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ],
    },
    {
      id: 4,
      title: "New York City Hotel",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti beatae nam, velit amet repellendus repudiandae mollitia qui eum ipsam maiores dolore quaerat fugiat, ad, necessitatibus voluptas! Nesciunt iste rem error totam iusto aliquid illo eos eveniet corrupti, dolorem et veritatis atque necessitatibus. Quas, eligendi laudantium! Molestiae excepturi provident numquam odit similique unde esse magni, nemo veritatis voluptates officiis doloremque recusandae tempore soluta, suscipit cupiditate, dolorem iste. Error sapiente, praesentium itaque aspernatur sit qui iste delectus, esse doloremque nam accusamus, culpa commodi ipsum! Quam corrupti magnam, aliquid dolores pariatur vel ipsa nobis earum? Accusantium optio laboriosam facere cumque, porro exercitationem!",
      img: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ],
    },
    {
      id: 5,
      title: "New York City Hotel",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti beatae nam, velit amet repellendus repudiandae mollitia qui eum ipsam maiores dolore quaerat fugiat, ad, necessitatibus voluptas! Nesciunt iste rem error totam iusto aliquid illo eos eveniet corrupti, dolorem et veritatis atque necessitatibus. Quas, eligendi laudantium! Molestiae excepturi provident numquam odit similique unde esse magni, nemo veritatis voluptates officiis doloremque recusandae tempore soluta, suscipit cupiditate, dolorem iste. Error sapiente, praesentium itaque aspernatur sit qui iste delectus, esse doloremque nam accusamus, culpa commodi ipsum! Quam corrupti magnam, aliquid dolores pariatur vel ipsa nobis earum? Accusantium optio laboriosam facere cumque, porro exercitationem!",
      img: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ],
    },
    {
      id: 6,
      title: "New York City Hotel",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti beatae nam, velit amet repellendus repudiandae mollitia qui eum ipsam maiores dolore quaerat fugiat, ad, necessitatibus voluptas! Nesciunt iste rem error totam iusto aliquid illo eos eveniet corrupti, dolorem et veritatis atque necessitatibus. Quas, eligendi laudantium! Molestiae excepturi provident numquam odit similique unde esse magni, nemo veritatis voluptates officiis doloremque recusandae tempore soluta, suscipit cupiditate, dolorem iste. Error sapiente, praesentium itaque aspernatur sit qui iste delectus, esse doloremque nam accusamus, culpa commodi ipsum! Quam corrupti magnam, aliquid dolores pariatur vel ipsa nobis earum? Accusantium optio laboriosam facere cumque, porro exercitationem!",
      img: [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        }
      ],
    },
  ]);

  const [newEntry, setNewEntry] = useState({
    id: 99,
    title: "",
    desc: "",
    img: [
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
      },
      {
        src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
      },
    ],
  });

  const [imageState, setIImageState] = useState()

  return (
    <div className="catContainer">
      {openModal && (
        <div className="modal">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="modalClose"
            onClick={() => setOpenModal(!openModal)}
          />
          <input
            type="text"
            placeholder="title"
            onChange={(e) =>
              setNewEntry({ ...newEntry, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Desc"
            onChange={(e) => setNewEntry({ ...newEntry, desc: e.target.value })}
          />
          <input
            type="file"
            onChange={(e) => setIImageState(e.target.value) }
          />

          <img src={imageState} alt="" />
          <button onClick={() => (lists.push(newEntry), console.log(lists))}>
            Submit
          </button>
        </div>
      )}
      {!openModal && (
        <div className="catWrapper">
          <h1>{title}</h1>
          <div className="catWrapper">
            {lists.map((list, index) => (
              <div key={index} className="singleCate">
                <img
                  src={
                    list.id === currentId
                      ? list.img[sliderNumber].src
                      : list.img[0].src
                  }
                  alt=""
                  width={240}
                  onClick={() => handleMove(list.id, index)}
                />
                <h1>{list.title}</h1>
                <p>
                  {list.desc.length < 100
                    ? list.desc
                    : list.desc.slice(0, 100) + "...Read More"}
                </p>
                <div className="cateBtn">
                  <Link
                    to={`/categories/${index}`}
                    onClick={() =>
                      setImage({
                        img: list.img,
                        title: list.title,
                        desc: list.desc,
                        len : lists[index].img.length
                      })
                    }
                    className="button"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className="pIcon"
            onClick={() => setOpenModal(!openModal)}
          />
        </div>
      )}
    </div>
  );
};

export default Categories;
