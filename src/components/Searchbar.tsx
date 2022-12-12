import React, {useRef, useState} from 'react';
import SearchResults from 'components/SearchResults';

type Props = {
  initialExpanded?: boolean;
  onSearch?(): void;
};

export default function Searchbar({initialExpanded, onSearch}: Props) {
  const [expanded, setExpanded] = useState<boolean>(initialExpanded ?? false);
  const [prompt, setPrompt] = useState('');
  const searchBar = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex">
      <input
        value={prompt}
        ref={searchBar}
        onChange={e => setPrompt(e.target.value)}
        placeholder="Page name"
        className={`${
          !expanded ? 'w-0' : 'w-40 p-2'
        } mr-2 border transition-all`}
      />
      <button
        onClick={() => {
          setExpanded(!expanded);
          if (searchBar.current) {
            searchBar.current.focus();
          }
        }}
      >
        <SearchIcon />
      </button>
      <SearchResults
        prompt={prompt}
        expanded={expanded}
        onSearch={() => {
          setExpanded(false);
          onSearch && onSearch();
        }}
      />
    </div>
  );
}

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
