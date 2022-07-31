import { join } from "path";
import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
    hooks: {
        "components:dirs"(dirs){
            dirs.push({
                path: join(__dirname, "composables"),
                prefix: "ironex"
            },{
                path: join(__dirname, "Form"),
                prefix: "ironex"
            })
        }
    }
})
