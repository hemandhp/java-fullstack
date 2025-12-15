export default function CartSidebar({ cart, setCart, open, close }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  function changeQty(id, delta) {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty + delta } : item
        )
        .filter((i) => i.qty > 0)
    );
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={close}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-4 transform transition ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 mt-10 text-center">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center gap-3 mb-4">
              <img
                src={item.img}
                alt=""
                className="w-16 h-16 object-cover rounded"
              />

              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">
                  ${item.price} × {item.qty}
                </p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => changeQty(item.id, -1)}
                  className="px-2 border rounded"
                >
                  -
                </button>
                <button
                  onClick={() => changeQty(item.id, 1)}
                  className="px-2 border rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}

        <div className="mt-4 font-semibold text-lg">
          Subtotal: ${subtotal.toFixed(2)}
        </div>
      </div>
    </>
  );
}
