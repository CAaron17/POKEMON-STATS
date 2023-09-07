const buttonName = document.getElementById("consultar");
const generalContainer = document.getElementById("general-container");
const info = document.querySelector(".info");
const stats = document.getElementById("stats");

buttonName.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.toLowerCase();

  const getPokemon = async () => {
    try {
      const restPost = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const post = await restPost.json();

      info.innerHTML = "";
      info.innerHTML = `
      <div class="upper">
        <h2>${post.name}</h2>
        <h2>${post.id}</h2>
      </div>
      <img
        src="${post.sprites.other.dream_world.front_default}"
        alt="${post.name}"
      />
      <p>${post.types.map((element) => element.type.name).join(", ")}</p>
      `;
      const type = post.types[0].type.name;
      info.id = type;

      stats.innerHTML = "";
      stats.innerHTML = `
      <div class="stat">
        <label for="">${post.stats[0].stat.name} (${post.stats[0].base_stat})</label>
        <form action="">
          <input type="range" name="" id="" value="${post.stats[0].base_stat}"/>
        </form>
      </div>

      <div class="stat">
        <label for="">${post.stats[1].stat.name} (${post.stats[1].base_stat})</label>
        <form action="">
         <input type="range" name="" id="" value="${post.stats[1].base_stat}"/>
        </form>
      </div>

      <div class="stat">
        <label for="">${post.stats[2].stat.name} (${post.stats[2].base_stat})</label>
        <form action="">
         <input type="range" name="" id="" value="${post.stats[2].base_stat}"/>
        </form>
      </div>

      <div class="stat">
        <label for="">${post.stats[3].stat.name} (${post.stats[3].base_stat})</label>
        <form action="">
          <input type="range" name="" id="" value="${post.stats[3].base_stat}"/>
        </form>
      </div>
      
      <div class="stat">
        <label for="">${post.stats[4].stat.name} (${post.stats[4].base_stat})</label>
        <form action="">
          <input type="range" name="" id="" value="${post.stats[4].base_stat}"/>
        </form>
      </div>

      <div class="stat">
        <label for="">${post.stats[5].stat.name} (${post.stats[5].base_stat})</label>
        <form action="">
          <input type="range" name="" id="" value="${post.stats[5].base_stat}"/>
        </form>
      </div>
      `;
    } catch (error) {
      info.id = "";
      info.innerHTML = `
        <p>pokemon not found</p>
      `;
      stats.innerHTML = `
        <p>statistics not found</p>
      `;
      console.log(error);
    }
  };
  getPokemon();
});
