const constructPreview = (client, handle, id, options = {}) => {
  const getUrl = () => {
    let baseUrl = 'https://cdn.filestackcontent.com/api/preview/';

    const cname = client.cname;
    const security = options.security;
    const css = options.css;

    if (cname) {
      baseUrl = `https://cdn.${client.cname}/api/preview/`;
    }
    if (security && !css) {
      return `${baseUrl}${handle}?signature=${options.security.signature}&policy=${options.security.policy}=`;
    }
    if (security && css) {
      return `${baseUrl}${handle}?css=${css}&signature=${options.security.signature}&policy=${options.security.policy}=`;
    }
    if (css && !security) {
      return `${baseUrl}${handle}?css=${css}`;
    }
    return `${baseUrl}${handle}`;
  };

  if (options.mode === 'iframe') {
    const iframe = document.createElement('iframe');

    iframe.src = getUrl();

    iframe.width = '100%';
    iframe.height = '100%';
    const domElement = document.getElementById(id);
    domElement.appendChild(iframe);
  }

  if (options.mode === 'window') {
    window.open(getUrl());
  }
};

export default constructPreview;
