const SizeSelection = () => {

  return (
    <div>
        <input type="radio" id="SizeS" name="size" value="S" /><label htmlFor="SizeS">S</label>
        <input type="radio" id="SizeM" name="size" value="M" /><label htmlFor="SizeM">M</label>
        <input type="radio" id="SizeL" name="size" value="L" /><label htmlFor="SizeL">L</label>
        <input type="radio" id="SizeXL" name="size" value="XL" /><label htmlFor="SizeXL">XL</label>
    </div>
  )
}

export default SizeSelection