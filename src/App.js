import './App.css';
import AsertoSwaggerUI from '@aserto/aserto-swagger-ui'

function App() {
  return (
    <div>
      <AsertoSwaggerUI 
        style={{ margin: 10 }} 
        url='https://onebox.demo.aserto.com/openapi/swagger.json' 
      />
    </div>
  );
}

export default App;
