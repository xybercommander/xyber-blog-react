# Checkpoint Definitions
<ol>
  <li> Checkpoint 1 has useState Hook Defined in the Home.js part </li>
  <li> Checkpoint 2 has the usage of lists with useState Hook in Home.Js</li>
  <li> Checkpoint 3 has the basic usage of props with components and multi usage of components</li>
  <li> Checkpoint 4 has the usage of functions as props (Deleting the blogs)</li>
  <li> Checkpoint 5 has the usage of useEffect Hook and how to use dependencies in it</li>
  <li> Checkpoint 6 has the implementation of the db.json which is used in the json-server. Command for running the json server is : <br><code>$npx json-server --watch data/db.json --port 8000</code><br> The directory of the db.json is <code>data/db.json</code> and the server is hosted on <code>localhost:8000</code></li>
  <li> Checkpoint 7 has the implementation of <code>fetch()</code> from the db.json hosted as the json server on port 8000</li>
  <li> Checkpoint 8 has the implementation of isPending or the Loading screen that shows before <code>fetch()</code> completes</li>
  <li> Checkpoint 9 has the implementation of handling error messages. A new useState variable <br><code>const [error, setError] = useState(null)</code><br> is made for showing the messages</li>
  <li> Checkpoint 10 has the implementation of of a custom hook which calls the fetch method. The hook is : <br><code>const { data, isPending, error } = useFetch(<url>);</code></li>
</ol>
