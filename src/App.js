import logo from './logo.svg';
import './App.css';

function App() {
  return (
	  <>
   <title>Card Example</title>
<div class = "wrapper">
	<div class="card">
		<img src="https://i5.walmartimages.com/seo/Disney-Pixar-Toy-Story-Buzz
		-Lightyear-Talking-Action-Figure_11123c59-f8b1-4483-bb77-
		c31a7b2a9b75_1.dd0c2d86b361071a7a810bd23af41f22.jpeg?odn
		Height=768&odnWidth=768&odnBg=FFFFFF" alt="Card Image" class="card-img">
		<div class="card-content">
			<h2 class="card-title">Buzz Lightyear</h2>
			<p class="card-description">Too infinity and beyond!</p>
			<a href="#" class="details-button">Details</a>

		</div>
	</div>
</div>
<button id="btn" class="btn">Add Another Card</button>
<button id = "delete">Delete Card</button>
<button id = "title">Change Title</button>
<script>
    document.querySelector('btn').addEventListener('click', function(f){
      const link =
      document.querySelector('wrapper');
    })

  </script>
	  </>
  );
}

export default App;
