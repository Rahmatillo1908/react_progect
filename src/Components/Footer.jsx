import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <footer class="page-footer">
                <div class="footer-copyright">
                    <div class="container">
                        <span>
                            © {new Date().getFullYear()} Barcha huquqlar himoyalangan
                        </span>
                        <a class="grey-text text-lighten-4 right" href="#!">
                            Elekton magazin
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer