 const tracks = [
    {title: 'First', url: '#'},
    {title: 'Second', url: '#'},
    {title: 'Second', url: '#'},
    {title: 'Second', url: '#'},
    {title: 'Second', url: '#'},
 ];

 const rootEl = document.getElementById('root');

 const titleEl = document.createElement('h1');
 titleEl.append('Player');
 rootEl.append(titleEl);

 const tracksEl = document.createElement('ul');
 tracks.forEach(track => {
    const trackEl = document.createElement('li');
    const trackTitleEl = document.createElement('div');
    trackTitleEl.append(track.title);
    trackEl.append(trackTitleEl);

    const trackPlayerEl  = document.createElement('audio');
    trackPlayerEl.controls = true;
    trackPlayerEl.src = track.url;
    trackEl.append(trackPlayerEl);

    tracksEl.append(trackEl);
 });
 rootEl.append(tracksEl);
