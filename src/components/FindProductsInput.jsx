const FindProductsInput = (props) => {
  const {searchTerm, setSearchTerm} = props
  return (
    <search>
      <form className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="🔍 Find product..."
          aria-label="Search for product name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>
    </search>
  );
};

export default FindProductsInput;