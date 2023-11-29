import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
        <div>
            <Link href='/'>Todos</Link>
        </div>
        <div>
            <Link href='/completed-tasks'>
                <button>Completed Todos</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar