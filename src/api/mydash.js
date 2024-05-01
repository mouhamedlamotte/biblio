import { useEffect } from 'react';

const BaseURL = 'https://api-mydash.vercel.app';
// const BaseURL = 'http://127.0.0.1:3000';

const registerSite = (SiteId, description = "") => {
    const Name = SiteId;
    const Url = window.location.href;
    const page_title = document.title;
    const data = {
        Name,
        Url,
        Autre: {
            page_title,
            description
        }
    };

    fetch(`${BaseURL}/register_site`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        // Traiter la réponse si nécessaire
    })
    .catch(error => {
        console.error('Erreur lors de l\'enregistrement du site :', error);
    });
};

const registerGuest = (SiteId) => {
    const data = {
        SiteId
    };

    fetch(`${BaseURL}/register_guest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .catch(error => {
        console.error('Erreur lors de l\'enregistrement de l\'invité :', error);
    });
};

const registerPage = (SiteId) => {
    let list_page_ids = localStorage.getItem('list_page_ids');
    console.log(list_page_ids);

    if (list_page_ids === null) {
        localStorage.setItem("list_page_ids", []);
    }

    list_page_ids = localStorage.getItem('list_page_ids');

    const data = {
        SiteId,
        path: window.location.pathname,
        url: window.location.href,
        page_title: document.title,
        list_page_id: list_page_ids
    };

    fetch(`${BaseURL}/register_page`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        if (data.id !== null) {
            const new_list = list_page_ids.split(',');
            new_list.push(data.id);
            localStorage.setItem("list_page_ids", new_list);
        }
    })
    .catch(error => {
        console.error('Erreur lors de l\'enregistrement de la page :', error);
    });
};

const useRegister = (SiteId, description) => {
    useEffect(() => {
        registerSite(SiteId, description);
        registerGuest(SiteId);
        registerPage(SiteId);

        // Nettoyage d'effet
        return () => {
            // Code de nettoyage si nécessaire
        };
    }, []);
};

export default useRegister;
