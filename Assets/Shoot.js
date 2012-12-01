var prefabBullet:Transform;
var shootForce = 1000;

function Update() {
  if (Input.GetButtonDown("Jump")) {
    // Want the bullets to go along x-axis, but follow user's y and z camera
    var angleX = 90;
    var angleY = transform.eulerAngles.y;
    var angleZ = transform.eulerAngles.z;

    var instanceBullet = Instantiate(prefabBullet, transform.position,
      Quaternion.Euler(angleX, angleY, angleZ));

    instanceBullet.rigidbody.AddForce(transform.forward * shootForce);
  }
}