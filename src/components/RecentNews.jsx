import React from "react";
import News from "./News";

const RecentNews = () => {
  const newsItems = [
    {
      title: "Monthly meetings",
      headline: "lorem ipsum dolor sit amet consecetur blablablaaaaaaa",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti earum animi veniam dicta repellendus quae voluptates similique excepturi eum ex placeat alias nihil ipsam magni officiis, tenetur neque aperiam. Laborum, repellat unde corporis aut laboriosam facere numquam? Deleniti a vel assumenda illo consequuntur. Tenetur nulla perferendis, beatae repellendus magnam tempora adipisci non eaque eos rerum laboriosam et expedita iusto, aperiam unde error praesentium vel mollitia inventore quas amet aliquam quia maxime hic. Id maiores, quos officiis ex voluptates corrupti nemo. Nihil inventore, ratione animi beatae sapiente iusto, in neque exercitationem ipsam molestiae voluptate quam minus tempore error omnis a pariatur?",
      createdAt: "25/04/22",
      id: 1,
    },
    {
      title: "Soft Skils Training",
      headline: "lorem ipsum dolor sit amet consecetur blablablaaaaaaa",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti earum animi veniam dicta repellendus quae voluptates similique excepturi eum ex placeat alias nihil ipsam magni officiis, tenetur neque aperiam. Laborum, repellat unde corporis aut laboriosam facere numquam? Deleniti a vel assumenda illo consequuntur. Tenetur nulla perferendis, beatae repellendus magnam tempora adipisci non eaque eos rerum laboriosam et expedita iusto, aperiam unde error praesentium vel mollitia inventore quas amet aliquam quia maxime hic. Id maiores, quos officiis ex voluptates corrupti nemo. Nihil inventore, ratione animi beatae sapiente iusto, in neque exercitationem ipsam molestiae voluptate quam minus tempore error omnis a pariatur?",
      createdAt: "25/04/22",
      id: 2,
    },
    {
      title: "Peer health",
      headline: "lorem ipsum dolor sit amet consecetur blablablaaaaaaa",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti earum animi veniam dicta repellendus quae voluptates similique excepturi eum ex placeat alias nihil ipsam magni officiis, tenetur neque aperiam. Laborum, repellat unde corporis aut laboriosam facere numquam? Deleniti a vel assumenda illo consequuntur. Tenetur nulla perferendis, beatae repellendus magnam tempora adipisci non eaque eos rerum laboriosam et expedita iusto, aperiam unde error praesentium vel mollitia inventore quas amet aliquam quia maxime hic. Id maiores, quos officiis ex voluptates corrupti nemo. Nihil inventore, ratione animi beatae sapiente iusto, in neque exercitationem ipsam molestiae voluptate quam minus tempore error omnis a pariatur?",
      createdAt: "25/04/22",
      id: 3,
    },
    {
      title: "DMF Anniversary",
      headline: "lorem ipsum dolor sit amet consecetur blablablaaaaaaa",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti earum animi veniam dicta repellendus quae voluptates similique excepturi eum ex placeat alias nihil ipsam magni officiis, tenetur neque aperiam. Laborum, repellat unde corporis aut laboriosam facere numquam? Deleniti a vel assumenda illo consequuntur. Tenetur nulla perferendis, beatae repellendus magnam tempora adipisci non eaque eos rerum laboriosam et expedita iusto, aperiam unde error praesentium vel mollitia inventore quas amet aliquam quia maxime hic. Id maiores, quos officiis ex voluptates corrupti nemo. Nihil inventore, ratione animi beatae sapiente iusto, in neque exercitationem ipsam molestiae voluptate quam minus tempore error omnis a pariatur?",
      createdAt: "25/04/22",
      id: 4,
    },
  ];
  return (
    <div id="news" className="container-md mx-md-5 justify-content-center">
      <div className="text-primary">
        <h4 className="fw-bold">Recent News/Events</h4>
      </div>
      {newsItems.map((newsItem) => (
        <News key={newsItem.id} newsItem={newsItem} />
      ))}
    </div>
  );
};

export default RecentNews;
