const List = ({ data }) => {
  return (
    <>
      <section className='projects'>
        {data.map((project) => {
          const { id, title, img, link } = project;

          return (
            <a key={id} className='item' href={link}>
              <img src={img} alt={title} />
              <h4>{title}</h4>
              {/* <a href={link}>Go to Project</a> */}
            </a>
          );
        })}
      </section>
    </>
  );
};

export default List;