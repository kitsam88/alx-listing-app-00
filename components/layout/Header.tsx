const Header: React.FC = () => {
    return (
      <header className="bg-gray-100 py-4 px-8 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">Listing App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>Rooms</li>
            <li>Mansions</li>
            <li>Countryside</li>
          </ul>
        </nav>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
          <button className="ml-2 border px-4 py-2 rounded">Sign Up</button>
        </div>
      </header>
    );
  };
  
  export default Header;
  