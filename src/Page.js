function Page() {
    return (
    <div style={{border: '1px solid white',margin: 'auto',marginTop: '50px'}} >
      {/* <header>
        <img 
          src="react-logo.png" 
          alt="React logo" 
          width="100" // Manageable size for the image
        />
        <hr/>
      </header> */}
      <main>
        <h1>Reasons Im Excited to Learn React</h1>
        <ol>
          <li>Its one of the most popular frontend libraries.</li>
          <li>It makes building UI components efficient and reusable.</li>
          <li>React has great community support and a rich ecosystem.</li>
          <li>Learning React opens up more job opportunities.</li>
          <li>Its fun to work with component-based architecture!</li>
        </ol>
      </main>
      <footer>
        <p>©2025 Nuthan Kishore development. All rights reserved.</p>
      </footer>
    </div>
    )
}

export default Page;