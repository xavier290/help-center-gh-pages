import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Footer from "../../components/footer";

const Overview = () => {
  return (
    <Fragment>
      <div className="container overview">
        <h1>Wood Products:</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod labore
          eligendi harum repudiandae voluptas doloremque quos libero
          praesentium! Recusandae ratione ea esse ipsa impedit aliquam deleniti
          qui, at consequuntur facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nesciunt dolor eveniet, voluptatum neque consequuntur nihil aut
          accusantium iure dolorum libero vitae. Est nostrum explicabo delectus
          fuga commodi impedit? Aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          culpa, nulla quaerat, at doloribus nisi voluptates harum neque velit
          nostrum commodi inventore? Distinctio eius, corporis cupiditate alias
          est sed temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          culpa, nulla quaerat, at doloribus nisi voluptates harum neque velit
          nostrum commodi inventore? Distinctio eius, corporis cupiditate alias
          est sed temporibus!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          culpa, nulla quaerat, at doloribus nisi voluptates harum neque velit
          nostrum commodi inventore? Distinctio eius, corporis cupiditate alias
          est sed temporibus!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi animi
          sunt blanditiis sequi voluptatibus debitis veniam explicabo voluptatum
          mollitia repellendus earum odio aliquam minus, provident eum tenetur
          ipsum odit molestias?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
          obcaecati dicta hic error soluta ipsum incidunt in quam officia
          accusamus. Doloribus, nesciunt molestias? Ratione eaque voluptates at.
          Aliquid quaerat, eum eos veniam earum similique nam! Commodi
          recusandae eum dolore a? Animi facilis odio error obcaecati aperiam?
          Rerum quasi iste mollitia ratione, eius nisi nesciunt quidem sapiente
          minus quod sed quaerat aliquid error aliquam ipsum enim cupiditate
          commodi pariatur obcaecati temporibus architecto reiciendis. Fugiat,
          quod excepturi error at est sint, in libero facilis neque inventore
          accusamus tempore ex repudiandae, obcaecati quam?
        </p>
        <h2>First Steps:</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ad
          recusandae maiores quod libero officiis. Aliquam ex eligendi adipisci
          explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt,
          impedit! Deserunt distinctio veniam pariatur.
        </p>
        <h2>Common mistakes:</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius enim
          tempore similique at qui? Voluptate pariatur illo iure. Eum nihil
          vitae, voluptate sint a quos? Qui tempore nobis ratione dicta!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          debitis tenetur dolorum sed eveniet? Sunt incidunt aperiam aspernatur,
          eum dolor delectus illo atque non! Quisquam suscipit similique
          officiis id aut. Architecto sunt, cumque quos, reprehenderit molestiae
          animi debitis odio, delectus optio exercitationem minus accusamus
          veniam soluta. Ipsum ex, in quibusdam accusantium laboriosam sed
          officia illo, fuga ea, exercitationem ipsa voluptatem!
        </p>
        <h3>Explore:</h3>
        <ul>
          <li>
            <Link to="#">How to make the best Wood Products?</Link>
          </li>
          <li>
            <Link to="#">Getting started with the Wood Products.</Link>
          </li>
          <li>
            <Link to="#">Cleaning up the place before starting.</Link>
          </li>
          <li>
            <Link to="#">Lastest Articles.</Link>
          </li>
          <li>
            <Link to="#">Common Questions.</Link>
          </li>
        </ul>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Overview;
