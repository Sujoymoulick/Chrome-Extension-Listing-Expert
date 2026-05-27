import { renderFilled } from 'oh-my-logo';

async function displayLogo() {
  try {
    const palette = ['#4285f4', '#9b51e0', '#e91e63'];
    
    console.log('\n');
    await renderFilled('> EXTENTION EXPART', {
      palette: palette,
      font: 'simple',
      letterSpacing: 0
    });
    
    console.log('\nSuccessfully installed Extention Expart!');
    console.log('Run "/skills reload" in your Gemini CLI to activate.\n');
  } catch (error) {
    console.log('\n> EXTENTION EXPART\n');
    console.log('Successfully installed Extention Expart!');
    console.log('Run "/skills reload" in your Gemini CLI to activate.\n');
  }
}

displayLogo();
