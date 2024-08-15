const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    getSum(nums);
});


/**
 * Calcula la suma de todos los numéros dentro del parámetro nums y lo imprime en consola.
 * @param {Array} nums - Un arreglo de números enteros.
 */
function getSum(nums){
    let sum = nums.reduce((acc, num) => acc + num, 0);
    console.log(sum);
    return sum;
}