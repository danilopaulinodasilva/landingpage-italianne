import "./style.css";
import Alpine from "alpinejs";
import mask from "@alpinejs/mask";

window.Alpine = Alpine;

// Ativar o plugin de máscara
Alpine.plugin(mask);

Alpine.start();
