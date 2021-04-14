import Vue from 'vue'

window.Echo.channel('laravel_database_post-created')
            .listen('PostCreated', (e) => {
                Vue.$vToastify.success(`Título do Post ${e.post.title}`, 'Novo Post')
            })