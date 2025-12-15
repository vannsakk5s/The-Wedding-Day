alert(
`សេចក្តីជូនដំណឹង

សូមគោរពជម្រាបជូនភ្ញៀវកិត្តិយសទាំងអស់ដែលគ្រួសារ ខ្ញុំបាទ/នាងខ្ញុំបានអញ្ជើញដើម្បីចូលរួមអាពាហ៍ពិពាហ៍កូនប្រុសស្រី នៅថ្ងៃទី 19-20 ខែ ធ្នូ ឆ្នាំ 2025 នេះ
ដោយយោងតាមស្ថានការណ៍មិនល្អ (ប្រទេសមានសង្គ្រាម) យើងនឹងរៀបចំពិធីមង្គលការនេះនៅពេលដែលស្រុកទេសមានសុខសន្តិភាពឡើងវិញ អាស្រ័យហេតុនេះ សូមភ្ញៀវកិត្តិយសទាំងអស់ មេត្តាជ្រាបជាដំណឹងដោយក្តីគោរព និងរាប់អាន

សូមអរគុណ`
);


const eventDate = new Date("December 20, 2025 17:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  // Stop the timer when the countdown ends
  if (distance <= 0) {
    clearInterval(timer);
    document.getElementById("days").innerText = "0";
    document.getElementById("hours").innerText = "0";
    document.getElementById("minutes").innerText = "0";
    document.getElementById("seconds").innerText = "0";
    
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}, 1000);


  function openPopup(src) {
    document.getElementById('popupImage').src = src;
    document.getElementById('imagePopup').classList.remove('hidden');
  }

  // ❌ Close popup
  function closePopup() {
    document.getElementById('imagePopup').classList.add('hidden');
  }

  // Also close when clicking outside the image
  document.getElementById('imagePopup').addEventListener('click', (e) => {
    if (e.target.id === 'imagePopup') {
      closePopup();
    }
  });

