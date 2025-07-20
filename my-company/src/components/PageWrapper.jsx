const pageStyle = {
  padding: '30px',
  fontFamily: 'Arial, sans-serif',
  lineHeight: '1.6',
  color: '#333',
  textAlign: 'center',        // centers text horizontally
  minHeight: 'calc(100vh - 140px)', // ensures page fills viewport minus navbar/footer height
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',   // vertical centering
  alignItems: 'center',
};

function PageWrapper({ children }) {
  return <div style={pageStyle}>{children}</div>;
}

export default PageWrapper;
