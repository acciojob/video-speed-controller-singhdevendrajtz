const inputs = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

function toggle_action()
		{
		const video=document.querySelector(".flex");
		const play_pause=document.querySelector(".player_button")
			if (play_pause.textContent=="►")
			{
				console.log(play_pause.value)
				play_pause.textContent="❚ ❚"
			video.play();
				
			
			}
			else
				{ 
				
					video.pause()
					play_pause.textContent="►"
				}

		}
	