import React from 'react'

export default function AnimalList() {

    const animals=[
        {
            id: 1,
            name: "dog",
            img: "https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg"
        },
        {
            id: 2,
            name: "Cat",
            img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200"
        },
        {
            id: 3,
            name: "Mamut",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Mammouth.png"
        },
        {
            id: 4,
            name: "horse",
            img: "https://wildjolie.com/blogs/guide/pretty-beautiful-horse?srsltid=AfmBOooVlHKFN9PgaCU963PWmL23vyHXges88skn7an4sZEX1Z8oKLC8"
        }
    ];

    const HTMLAnimals = animals.map((animal) => {
        return(
            <li key={animal.id}>
                <h3>{animal.name}</h3>
                <img src={animal.img} alt="animal picture" width={200}/>
            </li>
        )
    })

  return (
    <section>
        <h2>Animals:</h2>
        <ul>
            {HTMLAnimals}
        </ul>
    </section>
  )
}
