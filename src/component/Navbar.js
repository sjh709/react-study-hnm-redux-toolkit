import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const menuList = [
    'Women',
    'Men',
    'Baby',
    'Kids',
    'H&M HOME',
    'Sport',
    'Sale',
    '지속가능성',
  ];

  const moveLoginPage = () => {
    if (authenticate) {
      setAuthenticate(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <div>
        <div className='login-button' onClick={moveLoginPage}>
          <FontAwesomeIcon icon={faUser} className='icon' />
          <div>{authenticate ? '로그아웃' : '로그인'}</div>
        </div>
      </div>
      <div className='nav-section'>
        <Link to='/'>
          <img
            width={100}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png'
          />
        </Link>
      </div>
      <div className='menu-area'>
        <ul className='menu-list'>
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>
        <div className='search-box'>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input type='text' placeholder='제품검색' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
