import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';

function App() {
  return (
    <div className="App">
  <Header/>
  <Entry 
    name="Mount Fuji" 
    country="Japan" 
    flag="https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" 
    image="https://scrimba.com/links/travel-journal-japan-image-url"
    location="https://www.google.com/maps?q=Mount+Fuji,+Honshu,+Japan"
    famousFor="Sacred volcano, hiking, photography"
    description="Mount Fuji is the highest mountain in Japan, standing at 3,776 meters. It is an iconic symbol of Japan and a popular spot for climbers and photographers."
  />
  <Entry 
    name="Taj Mahal" 
    country="India" 
    flag="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
    image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/800px-Taj_Mahal_N-UP-A28-a.jpg?20120929095829"
    location="https://www.google.com/maps?q=Taj+Mahal,+Agra,+Uttar+Pradesh,+India"
    famousFor="Mughal architecture, white marble, love symbol"
    description="The Taj Mahal is a UNESCO World Heritage site, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is renowned for its intricate white marble design and attracts millions of visitors every year."
  />
  <Entry 
    name="Statue of Liberty" 
    country="USA" 
    flag="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
    image="https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg"
    location="https://www.google.com/maps?q=Statue+of+Liberty,+New+York+City,+USA"
    famousFor="Symbol of freedom and democracy"
    description="The Statue of Liberty was a gift from France to the United States and stands as a universal symbol of freedom and democracy. It is located on Liberty Island in New York Harbor."
  />
  <Entry 
    name="Burj Khalifa" 
    country="Dubai, UAE" 
    flag="https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" 
    image="http://images.unsplash.com/photo-1582120031356-35f21bf61055?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    location="https://www.google.com/maps?q=Burj+Khalifa,+Dubai,+UAE"
    famousFor="Tallest building in the world, luxury, observation decks"
    description="Burj Khalifa is the tallest structure in the world at 828 meters. It features luxury hotels, residences, restaurants, and stunning observation decks with panoramic views of Dubai."
  />
  <Entry 
    name="Eiffel Tower" 
    country="France" 
    flag="https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg" 
    image="https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg"
    location="https://www.google.com/maps?q=Eiffel+Tower,+Paris,+France"
    famousFor="Iconic tower, sightseeing, romantic views"
    description="The Eiffel Tower, located in Paris, is one of the most recognizable structures in the world. Originally built as a temporary exhibit for the 1889 World's Fair, it is now a global symbol of France and a popular tourist attraction."
  />
  <Entry 
    name="Great Wall of China" 
    country="China" 
    flag="https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" 
    image="https://plus.unsplash.com/premium_photo-1664304492320-8359efcaad38?q=80&w=1466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    location="https://www.google.com/maps?q=Great+Wall+of+China,+Northern+China"
    famousFor="Ancient fortification, historic significance"
    description="The Great Wall of China is a series of fortifications built to protect China from invasions. Spanning over 13,000 miles, it is one of the greatest architectural feats in history and a UNESCO World Heritage site."
  />
  <Entry 
    name="Machu Picchu" 
    country="Peru" 
    flag="https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" 
    image="https://whc.unesco.org/uploads/thumbs/site_0274_0045-750-750-20241106125224.jpg"
    location="https://www.google.com/maps?q=Machu+Picchu,+Cusco,+Peru"
    famousFor="Incan architecture, mountain views, archaeological site"
    description="Machu Picchu is an ancient Incan city located high in the Andes Mountains. It is one of the most famous archaeological sites in the world and is renowned for its stunning views and historical significance."
  />
  <Entry 
    name="Colosseum" 
    country="Italy" 
    flag="https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg" 
    image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    location="https://www.google.com/maps?q=Colosseum,+Rome,+Italy"
    famousFor="Ancient amphitheater, gladiatorial combat"
    description="The Colosseum, also known as the Flavian Amphitheater, is an ancient Roman structure used for gladiatorial games and public spectacles. It is one of the greatest works of Roman engineering and a popular tourist destination."
  />
  <Entry 
    name="Sydney Opera House" 
    country="Australia" 
    flag="https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" 
    image="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    location="https://www.google.com/maps?q=Sydney+Opera+House,+Sydney,+Australia"
    famousFor="Iconic architecture, cultural events"
    description="The Sydney Opera House is one of the most recognizable landmarks in Australia. Its unique design and stunning location by the harbor make it a premier venue for performing arts and cultural events."
  />
  <Entry 
    name="Christ the Redeemer" 
    country="Brazil" 
    flag="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" 
    image="https://images.unsplash.com/photo-1593995863951-57c27e518295?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    location="https://www.google.com/maps?q=Christ+the+Redeemer,+Rio+de+Janeiro,+Brazil"
    famousFor="Religious monument, panoramic views"
    description="Christ the Redeemer is a giant statue of Jesus Christ located atop Corcovado Mountain. It is one of the most famous religious statues in the world and offers breathtaking views of the city of Rio de Janeiro."
  />
</div>
  );
}

export default App;
