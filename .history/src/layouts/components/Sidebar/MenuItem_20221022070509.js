function MenuItem({ title, icon, to}) {
    return ( 
        <div>
            {icon}
            { title }
            { to}
        </div>
     );
}

export default MenuItem;