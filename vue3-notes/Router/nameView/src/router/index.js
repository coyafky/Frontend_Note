import { createRouter, createWebHistory } from 'vue-router'
import UserSettings from '../views/UserSettings.vue'
import UserEmailsSubscriptions from '../views/UserEmailsSubscriptions.vue'
import UserProfile from '../views/Userprofile.vue'
import UserProfilePreview from '../views/UserProfilePreview.vue'

const routes = [
  {
    path: '/settings',
    component: UserSettings,
    children: [
      {
        path: 'emails',
        component: UserEmailsSubscriptions
      },
      {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router