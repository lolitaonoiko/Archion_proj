const Location = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362648.7837597184!2d-0.4759168491025522!3d44.94061942719232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2z0JHQvtGA0LTQvg!5e0!3m2!1suk!2sfr!4v1745684130182!5m2!1suk!2sfr"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <a href="https://maps.app.goo.gl/5Kt2soHkgxrsMDmn6" target="_blank" rel="noopener noreferrer">
                Open in Google Maps
            </a>
        </div>
    );
};

export default Location;
