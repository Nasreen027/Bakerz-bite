 var counter = document.querySelector(".visitor_count");
var visit_Count = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visit_Count) {
  visit_Count = Number(visit_Count) + 1;
  localStorage.setItem("page_view", visit_Count);
} 
else {
  visit_Count = 1;
  localStorage.setItem("page_view", 1);
}
counter.innerHTML = visit_Count;