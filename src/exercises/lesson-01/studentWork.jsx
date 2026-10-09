//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Dana Reynolds';
  const age = 61;
  const hobbies = [
    'walking on the beach',
    'crafting',
    'furniture refinishing',
    'upcycling',
    'Sewing',
  ];

  return (
    <div style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <h1 style={{ color: 'navy', border: '1px solid navy', padding: '10px' }}>
        {' '}
        About Me
      </h1>
      <p>
        Hi, My name is {name}. I enjoy creating new useful and beautiful Web
        Sites. I am studing React at the Code The Dream Coding AcademyI
        currently live in Wilmington, NC. I am married, {age} years old and have
        two adult children.
      </p>
      <p>
        My Hobbies include:
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <img
          src="./exercises/lesson-01/Screenshot.png"
          alt="screenshot of lesson1"
        />
      </p>
    </div>
  );
}
