const constructPreview = (client, handle, id, options = {}) => {
  options.mode = options.mode || 'iframe';

  if (!handle || typeof handle !== 'string') {
    throw new Error('handle must be a string');
  }

  if (options.mode === 'iframe') {
    const iframe = document.createElement('iframe');

    iframe.src = `https://cdn.filestackcontent.com/api/preview/${handle}`;

    iframe.width = '100%';
    iframe.height = '100%';
    const domElement = document.getElementById(id);
    domElement.appendChild(iframe);
  }
};

export default constructPreview;
