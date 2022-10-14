import List from './Project';

const Section = ({ data }) => {
    return (
        <section className='container'>
            <h2>my projects</h2>
            <List data={data} />
        </section>
    );
};

export default Section;
