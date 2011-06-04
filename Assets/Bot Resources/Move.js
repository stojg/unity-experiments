var text= '';
private var hit : RaycastHit;
		
function Update () {
	var rightHit : RaycastHit;
	
	if ( Physics.Raycast( transform.position, (transform.forward + -transform.right), rightHit, 1 ) ) {
		Debug.DrawLine ( transform.position, rightHit.point, Color.green );
		transform.Rotate (transform.right * Time.deltaTime );
	    transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler ( 0, transform.eulerAngles.y+20,0), Time.deltaTime * 3.0);;
	}
	else if ( Physics.Raycast( transform.position, transform.forward, hit, 4.0 ) ) {
		text = hit.collider.name;
		Debug.DrawLine ( transform.position, hit.point, Color.red );
		transform.Rotate (transform.right * Time.deltaTime );
	    var target = Quaternion.Euler ( 0, transform.eulerAngles.y+20,0);
	    transform.rotation = Quaternion.Slerp(transform.rotation, target, Time.deltaTime * 3.0);;

	} else {
		transform.Translate( transform.forward * 2.0 * Time.deltaTime, Space.World );
	}
}

function OnGUI () {
	GUI.Label (Rect (10, 10, 100, 20), text);
}
