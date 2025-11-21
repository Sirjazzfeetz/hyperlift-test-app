document.addEventListener('DOMContentLoaded', () => {
    const widgetIframe = document.getElementById('sc-widget');
    const widget = SC.Widget(widgetIframe);
    const playPauseBtn = document.getElementById('play-pause-btn');
    let isPlaying = true; // Auto-play is enabled in iframe src

    widget.bind(SC.Widget.Events.READY, () => {
        console.log('SoundCloud Widget Ready');
        playPauseBtn.textContent = 'PAUSE MUSIC';

        // Attempt to set volume to a reasonable level
        widget.setVolume(50);
    });

    widget.bind(SC.Widget.Events.PLAY, () => {
        isPlaying = true;
        playPauseBtn.textContent = 'PAUSE MUSIC';
    });

    widget.bind(SC.Widget.Events.PAUSE, () => {
        isPlaying = false;
        playPauseBtn.textContent = 'PLAY MUSIC';
    });

    playPauseBtn.addEventListener('click', () => {
        widget.toggle();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
